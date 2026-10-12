import type {Inquiry} from '../types';
export async function submitInquiry(inquiry:Inquiry):Promise<void>{
 const endpoint=import.meta.env.VITE_INQUIRY_ENDPOINT;
 if(!endpoint) throw new Error('Online submission is not connected yet. Your inquiry has not been sent. You can download your brief below and keep it for when contact details are available.');
 const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(inquiry)});
 if(!response.ok) throw new Error('Your inquiry could not be submitted. Please try again. Your details are still here.');
}
