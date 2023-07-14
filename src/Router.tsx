import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Products } from './pages/Products'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
