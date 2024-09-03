import React from 'react';
import { Sidebar } from "flowbite-react";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { ImStack } from "react-icons/im";
import { BiCoinStack } from "react-icons/bi";
import { Link } from 'react-router-dom';
import '../App.css';

export function Navbar() {
  return (
    <div className="navbar flex">
      {/* Sidebar Component */}
      <Sidebar aria-label="Sidebar with content separator example" className="h-screen">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/dashboard" className="text-xl font-bold text-center">
              DASHBOARD
            </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/proposal" icon={BiCoinStack}>
              Proposal
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <h2 className="text-xl font-bold">PPKS</h2>
            <Sidebar.Item as={Link} to="/laporan-ppks" icon={IoBookOutline}>
              Laporan PPKS
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/rekap-ppks" icon={ImStack}>
              Rekapitulasi Data PPKS
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/cetak-ppks" icon={HiOutlineArrowDownTray}>
              Cetak Data PPKS
            </Sidebar.Item>
         </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
          <h2 className="text-xl font-bold">PSKS</h2>
            <Sidebar.Item as={Link} to="/laporan-psks" icon={IoBookOutline}>
              Laporan PSKS
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/rekap-psks" icon={ImStack}>
              Rekapitulasi Data PSKS
            </Sidebar.Item>
            <Sidebar.Item as={Link} to="/cetak-psks" icon={HiOutlineArrowDownTray}>
              Cetak Data PSKS
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default Navbar;
