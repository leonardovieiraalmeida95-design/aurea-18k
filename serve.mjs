import http from 'node:http';
import path from 'node:path';
import {readFile,stat} from 'node:fs/promises';
const root=path.resolve('dist');const port=Number(process.env.PORT||4173);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8'};
http.createServer(async(req,res)=>{try{const requested=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=path.resolve(root,'.'+requested+(requested.endsWith('/')?'index.html':''));if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}const info=await stat(file);if(!info.isFile())throw new Error();res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(await readFile(file));}catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Página não encontrada');}}).listen(port,'127.0.0.1',()=>console.log(`Áurea 18K: http://127.0.0.1:${port}`));
