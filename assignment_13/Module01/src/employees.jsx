let sally='Sally Smith'
let mark='Mark Martin'
let holly='Holly Unlikely'
let rachana='Rachana Gandhi'
let parth='Parth Gandhi'
let chetna='Chetna Nainani'
    const ul =  (
        <ul style={{'color':'red', 'fontSize': '28px'}}>
            <li>{sally}</li>
            <li>{mark}</li>
            <li>{holly}</li>
            <li>{rachana.toUpperCase()}</li>
            <li>{parth}</li>
            <li>{chetna}</li>
        </ul>
    )
    ReactDOM.render(ul,document.getElementById('content'))