import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import { StylesPDF } from './styles';

export const ContactPDF = ({ contacts }) => {
  return (
    <PDFViewer style={{ width: '100%', height: '500px' }}>
      <Document>
        <Page style={StylesPDF.page}>
          {contacts.map((contact) => (
            <View key={contact.id} style={styles.contact}>
              <Text>Name: {contact.nome}</Text>
              <Text>Email: {contact.email}</Text>
              <Text>Telefone: {contact.telefone}</Text>
            </View>
          ))}
        </Page>
      </Document>
    </PDFViewer>
  );
};


