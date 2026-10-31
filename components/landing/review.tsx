

const ReviewDat = [
    {
        "name" : "Shun Piti Thwin",
        "description" : "First of all, I would like to say thanks for invite to the event ( Yangon Tour ). It was amazing and it became happiest day one of my life."
    },

    {
        "name" : "Win Htet Lin",
        "description" : "Hola, This event was really nice and I'm happy to talk with people who I didn't know,"
    }
]

export default function Review({ReviewRef}) {
    return (
        <div className="flex justify-center items-center pt-20 pb-20">
            <div className="w-320 h-[100vh]">
                <header className="flex justify-center flex-col items-center mb-20">
                    <h3 className="font-[Recursive] text-[17px] font-bold">Review</h3>
                    <span className="font-[valley] text-[13px]">What our learner say?</span>
                </header>

                <main>

                </main>
            </div>
        </div>
    )
}