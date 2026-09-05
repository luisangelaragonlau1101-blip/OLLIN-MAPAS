import { cp, rm, mkdir, readFile } from 'node:fs/promises';
import { Script } from 'node:vm';
new Script(await readFile('site/visual.js','utf8'),{filename:'site/visual.js'});
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
await cp('site','dist',{recursive:true});
console.log('OLLIN Visual 04.1: sintaxis comprobada; sitio listo en dist/.');
