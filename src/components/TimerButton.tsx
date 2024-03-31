export default function TimerButton({
  name, seconds, addTimer, bgColor = "bg-red-500"
}) {
  return (
    <button
      onClick={() => addTimer(name, seconds)}
      className={`px-4 py-2 rounded ${bgColor} text-white`
      }
    > {name}{seconds}s</button >
  )
}
