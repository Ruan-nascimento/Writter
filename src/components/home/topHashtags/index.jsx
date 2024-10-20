import { Hashtags } from "./hashtags";

export function TopHashTags({copied, setCopied}) {
  return(
    <div className="flex relative flex-col gap-2 h-5pc bg-slate-800 rounded-lg p-2 overflow-auto">
      <h2 className="text-center font-bold text-xl">TOP 10 Hashtags</h2>
      <div className="flex flex-col gap-1">
        <Hashtags setCopied={setCopied} hash="#inovação"/>
        <Hashtags setCopied={setCopied} hash="#Aventura"/>
        <Hashtags setCopied={setCopied} hash="#Criatividade"/>
        <Hashtags setCopied={setCopied} hash="#Saúdeebemestar"/>
        <Hashtags setCopied={setCopied} hash="#Tecnologia"/>
        <Hashtags setCopied={setCopied} hash="#Natureza"/>
        <Hashtags setCopied={setCopied} hash="#Arte"/>
        <Hashtags setCopied={setCopied} hash="#EstilodeVida"/>
        <Hashtags setCopied={setCopied} hash="#Sustentabilidade"/>
        <Hashtags setCopied={setCopied} hash="#Motivação"/>
      </div>
      <span className={`text-xs text-center absolute bottom-4 left-4 transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`} >Copiado para área de Transferência</span>
    </div>
  )
}