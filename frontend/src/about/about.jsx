import React from 'react'
import PageHeader from '../template/pageheader'

export default props => (
    <div>
        <PageHeader name='Sobre' small=' o Projeto'></PageHeader>
        <h2>Projeto de Tarefas</h2>
        <p>Projeto ulizando para estudo de react + node usando como banco de dados MongoDB</p>
        <h3><strong>OBS</strong></h3>
        <p>1-Ao Digitar a tarefa pode apertar o ENTER para Adicionar</p>
        <p>2-Ao Digitar a tarefa pode apertar o SHIT+ENTER para Pesquisar</p>
        <p>2-Ao Digitar a tarefa pode apertar o ESC para Limpar a tela</p>
    </div>
)