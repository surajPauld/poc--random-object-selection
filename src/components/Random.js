import React, { useState } from 'react'

const Random = () => {

    const [temp, setTemp] = useState([])

    const data = [
        { id: 1, que: 'que 1' },
        { id: 2, que: 'que 2' },
        { id: 3, que: 'que 3' },
        { id: 4, que: 'que 4' },
        { id: 5, que: 'que 5' },
        { id: 6, que: 'que 6' },
        { id: 7, que: 'que 6' },
        { id: 8, que: 'que 6' },
        { id: 9, que: 'que 6' },
        { id: 10, que: 'que 6' },
        { id: 11, que: 'que 6' },
        { id: 12, que: 'que 6' },
        { id: 13, que: 'que 6' },
        { id: 14, que: 'que 6' },
        { id: 15, que: 'que 6' },
        { id: 16, que: 'que 6' },
        { id: 17, que: 'que 6' },
        { id: 18, que: 'que 6' },
        { id: 19, que: 'que 6' },
        { id: 20, que: 'que 6' },
        { id: 21, que: 'que 6' },
        { id: 22, que: 'que 6' },
        { id: 23, que: 'que 6' },
        { id: 24, que: 'que 6' },
        { id: 25, que: 'que 6' },
        { id: 26, que: 'que 6' },
        { id: 27, que: 'que 6' },
        { id: 28, que: 'que 6' },
        { id: 29, que: 'que 6' },
        { id: 30, que: 'que 6' },
        { id: 31, que: 'que 6' },        
        { id: 32, que: 'que 6' },
    ]

    // const temp = []
    const giveRandom = () => {
        const t = []
        console.log(temp.length)
        for (let index = 0; index < 5; index++) {
            
            const randomNumber = data[Math.floor(Math.random()*data.length)];

            t.push(randomNumber)
            setTemp(t)
            console.log(randomNumber)
        }
        
}
// console.log(length)

  return (
    <div>
        <button
            onClick={giveRandom}
            style={{
                padding: '10px 29px',
                marginTop: '20px'
            }
            
        }
        
        >
            
            Start
        </button>

        {temp.length > 0 && (
            <div>
            {temp.map((randomNumber, idx) => {
                return (
                    <p key={idx}> {randomNumber.id}: {randomNumber.que} </p>
                    )
                })}
            </div>
            )
        }
            
        
    </div>
    
  )
}

export default Random