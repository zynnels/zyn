const { createClient } = require('@supabase/supabase-js');
module.exports=async(req,res)=>{
 const email=String(req.query?.email||'').trim().toLowerCase();
 if(!email) return res.status(400).send('E-mail inválido.');
 const supabase=createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SERVICE_ROLE_KEY);
 await supabase.from('newsletter_subscribers').update({active:false,updated_at:new Date().toISOString()}).eq('email',email);
 res.setHeader('Content-Type','text/html; charset=utf-8');
 res.end('<body style="font-family:Arial;padding:60px"><h1>Você saiu da lista LZ.</h1><p>Seu e-mail não receberá novos drops.</p></body>');
};