import { observer } from "mobx-react-lite";

const NotFoundPage = observer(() => {
    return (
        <div className='page'>
            <h1>Error 404</h1>
            <h2>Страница не найдена</h2>
        </div>
    )
})

export default NotFoundPage