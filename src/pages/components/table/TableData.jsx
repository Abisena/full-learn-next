import {
  Container,
  Heading,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import InputDrawer from "../drawer/inputUsers";
import DetailPelanggan from "../modal/detailProduct";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function TableData() {
  const router = useRouter();
  const isLoggedIn = true;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Container>
        <Center>
          <Heading mb={10}>goKasir!</Heading>
        </Center>
        <Table boxShadow="md" w={100}>
          <TableCaption>Daftar pelanggan dan detail pembelian</TableCaption>
          <Thead>
            <Tr>
              <Th>Nama Pelanggan</Th>
              <Th>Alamat</Th>
              <Th>No Telpon</Th>
              <Th>Detail</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Gaga</Td>
              <Td>Jln</Td>
              <Td>08</Td>
              <Td>
                <DetailPelanggan />
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <InputDrawer />
      </Container>
      ;
    </>
  );
}
