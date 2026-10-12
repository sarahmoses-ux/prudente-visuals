import {motion,useReducedMotion} from 'framer-motion';
import {ArrowUpRight,ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import type {ReactNode} from 'react';
export function Reveal({children,className=''}:{children:ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:1,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:.65,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function Button({to,children,outline=false}:{to:string;children:ReactNode;outline?:boolean}){return <Link className={`button ${outline?'outline':''}`} to={to}>{children}<ArrowUpRight size={16}/></Link>}
export function Eyebrow({children}:{children:ReactNode}){return <p className="eyebrow"><span/>{children}</p>}
export function PageHeader({label,title,italic,text}:{label:string;title:string;italic?:string;text:string}){return <header className="page-header wrap"><div className="page-header-inner"><Eyebrow>{label}</Eyebrow><h1>{title} {italic&&<em>{italic}</em>}</h1><p className="lede">{text}</p></div></header>}
export function CTA(){return <section className="cta wrap"><Eyebrow>LET'S MAKE IT HAPPEN</Eyebrow><Reveal><h2>Your next big idea<br/>starts <em>here.</em></h2><div className="cta-bottom"><p>Let's create something extraordinary together.</p><Link to="/contact" className="circle-link" aria-label="Let's collaborate"><ArrowUpRight/></Link></div></Reveal></section>}
export function TextLink({to,children}:{to:string;children:ReactNode}){return <Link to={to} className="text-link">{children}<ArrowRight size={16}/></Link>}
