const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');

module.exports = async (req,res)=>{
  if(req.method!=='POST') return res.status(405).json({error:'Método não permitido'});
  const email=String(req.body?.email||'').trim().toLowerCase();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({error:'Digite um e-mail válido.'});

  const supabase=createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { error }=await supabase.from('newsletter_subscribers').upsert(
    {email,active:true,updated_at:new Date().toISOString()},
    {onConflict:'email'}
  );
  if(error) return res.status(500).json({error:'Não foi possível cadastrar.'});

  if(process.env.RESEND_API_KEY && process.env.FROM_EMAIL){
    const resend=new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from:process.env.FROM_EMAIL,to:email,subject:'Você entrou na lista — LZ',
      html:`<div style="font-family:Arial;background:#0a0a0a;color:#fff;padding:48px">
      <p style="letter-spacing:3px;font-size:11px">LZ / PRIVATE ACCESS</p>
      <h1 style="font-family:Georgia;font-size:64px;font-weight:400">BE FIRST.</h1>
      <p>Cadastro confirmado. Você será um dos primeiros a saber dos próximos drops.</p>
      <p style="margin-top:48px">WEAR YOUR AURA</p></div>`
    }).catch(()=>{});
  }
  return res.status(200).json({ok:true});
};