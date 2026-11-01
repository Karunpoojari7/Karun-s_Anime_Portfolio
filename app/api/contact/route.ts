import { NextResponse } from "next/server";
export async function POST(req:Request){
 try{
  const {name,email,subject,message}=await req.json();
  if(!name||!email||!subject||!message) return NextResponse.json({error:"Missing fields"},{status:400});
  const key=process.env.RESEND_API_KEY; const to=process.env.CONTACT_TO_EMAIL;
  if(!key||!to) return NextResponse.json({error:"Contact service is not configured"},{status:503});
  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL||"Portfolio <onboarding@resend.dev>",to:[to],reply_to:email,subject:`Portfolio contact: ${subject}`,text:`From: ${name} <${email}>\\n\\n${message}`})});
  if(!response.ok) return NextResponse.json({error:"Email provider error"},{status:502});
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"Invalid request"},{status:400});}
}