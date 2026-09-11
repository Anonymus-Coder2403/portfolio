export function BackgroundMesh() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top radial gradient */}
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle at center, #6d6dff 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Bottom right accent */}
      <div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] opacity-10"
        style={{
          background:
            'radial-gradient(circle at center, #6d6dff 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
    </div>
  )
}
