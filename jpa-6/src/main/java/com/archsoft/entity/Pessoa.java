package com.archsoft.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "TB006_PESSOA")
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="TP_PESSOA", discriminatorType=DiscriminatorType.STRING)
@DiscriminatorValue("P")
public class Pessoa implements Serializable {

    private static final long serialVersionUID = -7587306736125891447L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "gen_pessoa")
    @Column(name = "ID_PESSOA")
    private Long id;

    @Column(name = "NOME", nullable = false)
    private String nome;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                '}';
    }
}