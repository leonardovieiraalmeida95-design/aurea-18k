import {readFile,access} from 'node:fs/promises';
import path from 'node:path';
const html=await readFile('dist/index.html','utf8');const errors=[];
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
if(new Set(ids).size!==ids.length)errors.push('IDs duplicados');
for(const [,attribute,value] of html.matchAll(/\b(src|href)="([^"]+)"/g)){if(value.startsWith('#')){if(!ids.includes(value.slice(1)))errors.push(`Âncora ausente: ${value}`);}else if(!/^(https?:|data:|mailto:|tel:)/.test(value)){try{await access(path.join('dist',value));}catch{errors.push(`Arquivo ausente: ${value}`);}}}
if(!html.includes('lang="pt-BR"')||!html.includes('name="viewport"'))errors.push('Metadados essenciais ausentes');
for(const [,tag] of html.matchAll(/(<img\b[^>]+>)/g)){if(!/\balt=/.test(tag))errors.push('Imagem sem alt');}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}console.log('OK: arquivos, âncoras, IDs, imagens e metadados. Site estático pronto em dist/.');
