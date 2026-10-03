const { createClient }=require('@supabase/supabase-js');
const { Resend }=require('resend');
module.exports=async(req,res)=>{
 if(req.method!=='POST') return res.status(405).json({error:'Método não permitido'});
 if(req.headers.authorization!==`Bearer ${process.env.ADMIN_SECRET}`) return res.status(401).json({error:'Não autorizado'});
 const {title,description,price,image,url}=req.body||{};
 if(!title||!url) return res.status(400).json({error:'title e url são obrigatórios'});
 const supabase=createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY);
 const {data,error}=await supabase.from('newsletter_subscribers').select('email').eq('active',true);
 if(error) return res.status(500).json({error:'Erro ao carregar inscritos'});
 const resend=new Resend(process.env.RESEND_API_KEY);
 let sent=0, failed=0;
 for(const s of data||[]){
  const unsub=`${process.env.SITE_URL}/api/unsubscribe?email=${encodeURIComponent(s.email)}`;
  try{
   await resend.emails.send({from:process.env.FROM_EMAIL,to:s.email,subject:`LZ — ${title}`,
   html:`<div style="max-width:620px;margin:auto;background:#0a0a0a;color:#fff;padding:42px;font-family:Arial">
   <p style="letter-spacing:3px;font-size:11px">LZ / NEW DROP</p>
   ${image?`<img src="${image}" style="width:100%;margin:20px 0">`:''}
   <h1 style="font-family:Georgia;font-size:46px;font-weight:400">${title}</h1>
   <p style="color:#bbb">${description||''}</p><h2>${price||''}</h2>
   <p><a href="${url}" style="display:inline-block;background:#fff;color:#000;padding:15px 24px;text-decoration:none;font-weight:bold">VER O DROP ↗</a></p>
   <p style="margin-top:50px;font-size:11px;color:#777">WEAR YOUR AURA · <a style="color:#aaa" href="${unsub}">Descadastrar</a></p></div>`});
   sent++;
  }catch(e){failed++}
 }
 res.json({ok:true,sent,failed});
};