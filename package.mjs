import {spawnSync} from 'node:child_process';
import {mkdirSync} from 'node:fs';
mkdirSync('release',{recursive:true});
const result=spawnSync('tar',['-a','-cf','release/aurea-18k-site.zip','dist','scripts','package.json','README.md','PROMPT-CRIACAO.md'],{stdio:'inherit'});
process.exit(result.status??1);
