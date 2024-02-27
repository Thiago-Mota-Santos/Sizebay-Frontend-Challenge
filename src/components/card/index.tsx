export default function Card(){
    return (
        <div>
            <header>
                 <span>07 JUL 2021</span> {/* TODO: must be dinamic */}
                 <span>Wednesday</span>    
            </header>
            <div className="progress-bar">...</div>
            <div>
                <span>Done</span>
                <span>Pending</span>
                <input type="text" placeholder="Search itens"  /> {/* TODO: add search icon */}
            </div>
            <button>Add new item</button> {/* TODO: add plus icon */}
        </div>
    )
}