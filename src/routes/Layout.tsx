import { FC, ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className='todo'>
            <div className="todo__wrapper">
                {children}
            </div>
        </div>
    )
}

export default Layout