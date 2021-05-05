package com.devsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsvendas.entities.Seller;

// JpaRepository já é um componente, por este motivo não é necessário registrar
// com annotations @Service como fizemos na classe SellerService.

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
