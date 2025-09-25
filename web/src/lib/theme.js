const KEY='theme';
export function getInitialTheme(){
  if(typeof localStorage!=='undefined'){
    const s=localStorage.getItem(KEY);
    if(s==='light'||s==='dark') return s;
  }
  if(typeof window!=='undefined'&&window.matchMedia
     &&window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}
export function applyTheme(t){
  document?.documentElement?.setAttribute('data-theme',t==='dark'?'dark':'light');
}
export function saveTheme(t){try{localStorage.setItem(KEY,t)}catch{}}
