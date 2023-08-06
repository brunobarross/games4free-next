'use client'

import React from 'react'

const HeaderContent = (props) => {
    const [plataforma, setPlataforma] = React.useState('')

    const filtrarPlataforma = (arr) => {
        return arr.filter((item) => item.platforms.toLowerCase().includes(plataforma.toLowerCase()))
    }

    const handleChangeSelect = (e) => {
        setPlataforma(e.target.value)
        filtrarPlataforma(props.jogos)
    }
    
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
        {/* <select  className='mt-2 outline-none py-3 px-3 text-white rounded bg-neutral-70 border border-white w-full' value={plataforma} onChange={({ target }) => handleChangeSelect(target)}>
            <option value="">Todas as plataformas</option>
            <option value="pc">PC</option>
            <option value="xbox">Xbox</option>
            <option value="Playstation">Playstation</option>

        </select> */}

         <p className="text-white text-base  mt-8 md:mt-0 ">Mostrando {props.quantidade} {props.quantidade > 1 ? 'itens disponiveis' : 'item disponivel'}</p>
    </div>
  )
}

export default HeaderContent