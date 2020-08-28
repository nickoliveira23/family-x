import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiEdit2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/FMLY-AZUL.png';

export default function Profile() {
    const [members, setMembers] = useState([]);

    const history = useHistory();

    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');



    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userId,
            }
        }).then(response => {
            setMembers(response.data);
        })
    }, [userId])

    async function handleDeleteMember(id) {
        try {
            await api.delete(`members/${id}`, {
                headers: {
                    Authorization: userId,
                }
            });

            await api.delete(`address/${id}`)

            setMembers(members.filter(member => member.id !== id));
        } catch (err) {
            alert('Erro ao deletrar integrante, tente novamente.')
        }
    }

    async function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Family X Crew" />
                <span>Bem vindo(a), {userName}</span>

                <Link className="button" to="/member/new">Cadastrar novo integrante</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#01A8E5" />
                </button>
            </header>

            <h1>Membros do grupo</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Situação</th>
                        <th scope="col">Data de Nascimento</th>
                        <th scope="col">RG</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(member => (
                        <tr key={member.id}>
                            <th scope="row">{member.id}</th>
                            <td>
                                <button className="space" onClick={() => handleDeleteMember(member.id)} type="button">
                                    <FiTrash2 size={15} color="#a8a8b3" />
                                </button>
                                <Link to="/member/edit">
                                    <button type="button">
                                        <FiEdit2 size={15} color="#a8a8b3" />
                                    </button>
                                </Link>

                            </td>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.situation}</td>
                            <td>{member.birth}</td>
                            <td>{member.rg}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}