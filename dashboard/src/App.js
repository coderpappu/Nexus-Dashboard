import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Order, Calendar,Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import "./App.css"


function App() {
    const {activeMenu} = useStateContext();
    
  return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                {/* bottom setting icon  */}
                <div className='fixed right-4 bottom-4' style={{zIndex : '1000'}}>
                    <TooltipComponent content="settings" position="Top">
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background : "blue" , borderRadius : '50%'}}>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                {/* side bar menu width = 72 / 0 -- on off option */}
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar/>
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar/>
                    </div>
                )}
                {/* top navbar section  */}
                <div
                    className={
                    activeMenu
                        ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                        : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    <Navbar />
                    </div>
                {/* all page route section  */}
                <div>
                <Routes>
                    {/* "Dashboard" */}
                    <Route path='/' element={<Ecommerce/>}  />
                    <Route path='/ecommerce' element={<Ecommerce/>}  />

                    {/* "Pages" */}
                    <Route path='/orders' element={<Order/>}  />
                    <Route path='/employees' element={<Employees/>}  />
                    <Route path='/customers' element={<Customers/>}  />

                    {/* "Apps" */}
                    <Route path='/Kanban' element={<Kanban/>} />
                    <Route path='/editor' element={<Editor/>} />
                    <Route path='/calendar' element={<Calendar/>} />
                    <Route path='/color-picker' element={<ColorPicker/>} />

                    {/* "Chars" */}
                    <Route path='/line' element={<Line/>} />
                    <Route path='/area' element={<Area/>} />
                    <Route path='/bar' element={<Bar/>} />
                    <Route path='/pie' element={<Pie/>} />
                    <Route path='/financial' element={<Financial/>} />
                    <Route path='/colormaping' element={<ColorMapping/>} />
                    <Route path='/pyramid' element={<Pyramid/>} />
                    <Route path='/stacked' element={<Stacked/>} />

                </Routes>
            </div>
            </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App