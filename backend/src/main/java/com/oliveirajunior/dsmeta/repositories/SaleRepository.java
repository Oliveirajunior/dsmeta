package com.oliveirajunior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oliveirajunior.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}