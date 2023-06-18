import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react';
import BarraLateral from '../../components/BarraLateral';

export default function login() {
	const navigate = useNavigate
	function Redirect() {
		window.location.href = 'http://localhost:3000/painel/inicio';
		navigate('http://localhost:3000/painel/inicio')
	}

	return (
		<>
      <BarraLateral t1='Login' t2='Cadastro' t3=''/>
			<Box w='100%' h='100vh' p={4}>
				<Box className='d-flex justify-content-center align-items-center' h='100%'>
					<p>
					<div className='formulario_envio'>
						<span>Teste</span>
						<input type="text" className='form-control' />
					</div>
					</p>
					<div className='formulario_envio'>
						<span>Teste</span>
						<input type="text" className='form-control' />
					</div>
				</Box>
			</Box>
		</>
	)
}
