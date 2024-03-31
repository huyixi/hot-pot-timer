export default function TimerButton({
  name, seconds, addTimer, bgColor = "bg-red-500"
}) {
  return (
    <button
      onClick={() => addTimer(name, seconds)}
      className={`px-4 rounded ${bgColor} text-white text-center h-8 leading-8`
      }
    > {name}{seconds}s</button >
  )
}
