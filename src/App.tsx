import React from 'react';
import logo from './logo.svg';
import './App.css';

const aaa = 'aaa';
console.log(aaa);
console.log(`${aaa}a`)

let bbb = 'bbb';
console.log(bbb);
console.log(`${bbb}b`)

const ccc = (): void => console.log('ccc');
ccc();

const ddd = (d: string): string => d;
console.log(ddd('ddd'));

const eee = (e1: string, e2: string = 'ee'): string => {
  const e3 = e1 + e2;
  return e3;
}
console.log(eee('e'));

class Fff {
  f: string;
  constructor(f: string) {
    this.f = f;
  }
  log(): void {
    console.log(this.f);
  }
}
const fff = new Fff('fff');
fff.log();
fff.f = 'ffff';
console.log(fff.f);

class Ggg {
  private _g: string = '';
  get g(): string {
    return this._g;
  }
  set g(value) {
    this._g = value;
  }
  constructor(g: string) {
    this.g = g;
  }
  log(): void {
    console.log(this.g);
  }
}
const ggg = new Ggg('ggg');
ggg.log();
ggg.g = 'gggg';
console.log(ggg.g);

class Hhh1 {
  h1: string;
  constructor(h1: string) {
    this.h1 = h1;
  }
  log(): void {
    console.log(this.h1);
  }
}
class Hhh2 extends Hhh1 {
  h2: string;
  constructor(h1: string, h2: string = 'hh') {
    super(h1);
    this.h2 = h2;
  }
  log(): void {
    console.log(this.h1 + this.h2);
  }
}
const hhh = new Hhh2('h')
hhh.log();
hhh.h2 = 'hh';
console.log(hhh.h2);

const [iii, jjj] = ['iii', 'jjj'];
console.log(iii);
console.log(jjj);

const {kkk, lll} = {kkk: 'kkk', lll: 'lll'};
console.log(kkk);
console.log(lll);

const mmm = ['m1', 'm2'];
console.log([...mmm, 'm3'])

const nnn = {n1: 'n1', n2: 'n2'}
console.log({...nnn, n3: 'n3'})

const o1 = 'o1';
console.log({o1, o2: 'o2'});

const ppp = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
ppp(1000)
.then(() => console.log('ppp'))
.catch(err => console.log(`Error: ${err}`));

const qqq = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  try {
    await qqq(1000);
    console.log('qqq')
  }
  catch (err) {
    console.log(`Error: ${err}`)
  }
})();

const rrr = [1, 2, 3];
console.log(rrr.map(it => it * 2));
console.log(rrr.filter(it => it % 2 !== 0));
console.log(rrr.find(it => it > 1));
console.log(rrr.every(it => it >= 1));
console.log(rrr.some(it => it <= 1));
console.log(rrr.includes(1));
console.log(rrr.reduce((a, b) => a + b));
console.log(rrr.sort((a, b) => b - a));


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
