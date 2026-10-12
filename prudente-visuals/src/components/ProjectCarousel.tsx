import {useCallback,useEffect,useRef,useState} from 'react';
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion';
import {ArrowLeft,ArrowRight,ArrowUpRight,Pause,Play} from 'lucide-react';
import {Link} from 'react-router-dom';
import {projects} from '../data/content';

export default function ProjectCarousel({compact=false}:{compact?:boolean}){
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  const reduced=useReducedMotion();
  const touchStart=useRef<number|null>(null);
  const count=compact?4:projects.length;
  const slides=projects.slice(0,count);
  const move=useCallback((direction:number)=>setActive(current=>(current+direction+count)%count),[count]);
  useEffect(()=>{if(paused||reduced)return;const timer=window.setInterval(()=>move(1),5500);return()=>window.clearInterval(timer)},[move,paused,reduced]);
  const project=slides[active];
  return <section className={`project-carousel ${compact?'compact':''}`} aria-roledescription="carousel" aria-label="Featured creative concepts" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setPaused(false)}} onTouchStart={event=>{touchStart.current=event.touches[0].clientX}} onTouchEnd={event=>{if(touchStart.current===null)return;const delta=event.changedTouches[0].clientX-touchStart.current;if(Math.abs(delta)>45)move(delta>0?-1:1);touchStart.current=null}}>
    <div className="carousel-stage"><AnimatePresence mode="wait" initial={false}><motion.div className="carousel-slide" key={project.slug} initial={reduced?false:{opacity:0,x:38}} animate={{opacity:1,x:0}} exit={reduced?undefined:{opacity:0,x:-38}} transition={{duration:.5,ease:[.22,1,.36,1]}}><Link to={`/portfolio/${project.slug}`} className="carousel-image" aria-label={`View ${project.title}`}><img src={project.image} alt={`${project.title} — illustrative ${project.category.toLowerCase()} reference`}/><span className="demo-tag">DEMONSTRATION PROJECT</span></Link><div className="carousel-copy"><p className="carousel-kicker">0{active+1} / 0{count} · {project.category}</p><h3>{project.title}</h3><p>{project.description}</p><Link to={`/portfolio/${project.slug}`} className="carousel-link">View concept <ArrowUpRight size={18}/></Link></div></motion.div></AnimatePresence></div>
    <div className="carousel-controls"><div className="carousel-arrows"><button onClick={()=>move(-1)} aria-label="Previous project"><ArrowLeft/></button><button onClick={()=>move(1)} aria-label="Next project"><ArrowRight/></button></div><div className="carousel-dots" role="tablist" aria-label="Choose a project">{slides.map((slide,index)=><button key={slide.slug} className={index===active?'active':''} onClick={()=>setActive(index)} role="tab" aria-selected={index===active} aria-label={`Show project ${index+1}: ${slide.title}`}><span/></button>)}</div>{!reduced&&<button className="carousel-pause" onClick={()=>setPaused(value=>!value)} aria-label={paused?'Play carousel':'Pause carousel'}>{paused?<Play size={16}/>:<Pause size={16}/>}</button>}</div>
  </section>
}
