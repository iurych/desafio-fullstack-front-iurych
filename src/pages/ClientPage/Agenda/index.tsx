import { FaTrash, FaEdit, FaPlus, FaFilePdf } from 'react-icons/fa';
import { ActionsTd, BoxBtn, Button, Container, Table, Td, Th } from './styled';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContactContext } from '../../../providers/ContactContext';

export const Agenda = () => {
  const { contacts, setContacts, handlePDF } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const logOut = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <Container>
      <BoxBtn>
        <Button>
          <FaPlus />
          Adicionar Novo Contato
        </Button>
        <Button onClick={handlePDF}>
          <FaFilePdf />
          Gerar PDF
        </Button>
        <Button>Editar perfil</Button>
        <Button onClick={logOut}>Sair</Button>
      </BoxBtn>
      <Table>
        <thead>
          <tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Data de registro</Th>
            <Th>Telefone</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <Td>{contact.fullName}</Td>
              <Td>{contact.email}</Td>
              <Td>{contact.registeredAt}</Td>
              <Td>{contact.phoneNumber}</Td>
              <ActionsTd>
                <button onClick={() => handleDelete(contact.id)}>
                  <FaTrash />
                </button>
                <button>
                  <FaEdit />
                </button>
              </ActionsTd>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
