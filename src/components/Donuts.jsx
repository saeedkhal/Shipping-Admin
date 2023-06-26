
function Donuts({ text='', percentage =30, num=0}) {
    return (
                <div className="w-[40%]">

                <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg"
                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                        strokeDasharray={`${percentage}, 100`}
                        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
                    <text x="18" y="16" className="percentage">{num}</text>
                    <text x="18" y="26" className="percentage">{text}</text>
                </svg>
          </div>
    );
}

export default Donuts;