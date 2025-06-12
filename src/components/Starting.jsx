const Starting = ({ isComplete }) => {
  return (
      <div
      className={`h-dvh w-full absolute z-30 grid place-content-center grid-cols-2 gap-6 overflow-hidden transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : ''
      }`}
      >
      <div id="starting-bg" className="bg-black h-full w-full absolute"></div>
      <span id="starting-title" className="text-3xl font-bold font-serif text-white justify-self-end">MILÉN</span>
      <span id="starting-sections" className="text-2xl text-white tracking-widest">IPSNC</span>
    </div>
  )
}

export default Starting