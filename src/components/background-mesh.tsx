export function BackgroundMesh() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle at center, #f5f3ee 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle at center, #f5f3ee 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  )
}
