import type {Project} from '../types';
import {serviceGroups} from './services';
export const photo = (id:string,w=1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const images={hero:photo('photo-1600210492486-724fe5c67fb0',2400),studio:photo('photo-1497366754035-f200968a6e72'),brand:photo('photo-1607344645866-009c320b63e0'),create:photo('photo-1485846234645-a62644f84728'),promote:photo('photo-1441986300917-64674bd600d8'),build:photo('photo-1499951360447-b19be8fe80f5')};
const pillarSummaries=[
 {id: 'brand',title: 'Brand',line: 'Build identities people recognize.',image:images.brand},
 {id: 'create',title: 'Create',line: 'Produce experiences people remember.',image:images.create},
 {id: 'promote',title: 'Promote',line: 'Turn attention into measurable growth.',image:images.promote},
 {id: 'build',title: 'Build',line: 'Create products and systems that scale.',image:images.build}
];
export const pillars=pillarSummaries.map(p=>({...p,categories:serviceGroups[p.id]}));
export const categories=['All','Branding','Film','Photography','Architecture','Digital','Campaigns'] as const;
export const projects:Project[]=[
 {slug:'form-and-feeling',title:'Form & feeling',category:'Architecture',year:'Concept study',image:images.hero,description:'An exploration of light, texture, and the spaces we inhabit.'},
 {slug:'quiet-confidence',title:'Quiet confidence',category:'Branding',year:'Concept study',image:images.brand,description:'A restrained visual identity with a distinctive point of view.'},
 {slug:'in-the-frame',title:'In the frame',category:'Film',year:'Concept study',image:images.create,description:'A visual narrative shaped by mood, rhythm, and human connection.'},
 {slug:'everyday-perspectives',title:'Everyday perspectives',category:'Photography',year:'Concept study',image:photo('photo-1515886657613-9f3515b0c78f'),description:'An editorial study in movement, character, and natural light.'},
 {slug:'made-to-connect',title:'Made to connect',category:'Digital',year:'Concept study',image:images.build,description:'A thoughtful digital experience, from first impression to interaction.'},
 {slug:'a-new-perspective',title:'A new perspective',category:'Campaigns',year:'Concept study',image:images.promote,description:'A campaign concept that gives a familiar story a fresh expression.'}
];
export const steps=[{title:'Discover',text:"Understand your audience, market, goals, and success metrics. We start with listening, ask the right questions, and define a shared brief.",detail:'Discovery conversations · Research · Project brief'}, {title:'Design',text:'Develop creative strategies, explore concepts, and agree on the strongest direction. Together, we turn possibilities into a focused creative vision.',detail:'Strategy · Concept exploration · Creative direction'}, {title:'Deliver',text:'Produce, build, and launch with clear milestones and professional execution. Every detail is considered from the first draft to the final handover.',detail:'Production · Development · Quality review · Launch'}, {title:'Develop',text:'Review results, refine the work, and support long-term growth. The launch is the beginning of a relationship that keeps your vision moving forward.',detail:'Review · Refinement · Ongoing support'}];
export const regions=[{name:'Nigeria',text:'Branding, media production, event coverage, marketing, print, digital development, and creative design.'},{name:'North America',text:'Corporate branding, commercial production, digital experiences, performance marketing, and creative services.'},{name:'Remote',text:'Brand identity, editing, web/app development, AI automation, content creation, and virtual production support.'}];

