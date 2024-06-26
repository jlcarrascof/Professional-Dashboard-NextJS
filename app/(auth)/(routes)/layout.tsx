export default function LayoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center h-full items-center">
        <p>Tarredev Dashboard</p>
        <h1 className="text-3xl my-2">Welcome to my dashboard</h1>
        <h2 className="text-2xl mb-3">TarreDashboard</h2>
        {children}
    </div>
  )
}
