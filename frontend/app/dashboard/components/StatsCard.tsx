type Props = {
  title: string
  value: number
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
      <p className="text-slate-400 text-sm mb-2">
        {title}
      </p>
      <h2 className="text-3xl font-bold text-white">
        {value}
      </h2>
    </div>
  )
}
