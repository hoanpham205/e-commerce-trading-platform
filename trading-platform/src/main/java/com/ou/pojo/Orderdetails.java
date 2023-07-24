/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.pojo;

import java.io.Serializable;
import java.util.Set;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author ADMIN
 */
@Entity
@Table(name = "orderdetails")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Orderdetails.findAll", query = "SELECT o FROM Orderdetails o"),
    @NamedQuery(name = "Orderdetails.findByOrderDetailId", query = "SELECT o FROM Orderdetails o WHERE o.orderDetailId = :orderDetailId"),
    @NamedQuery(name = "Orderdetails.findByTransactionId", query = "SELECT o FROM Orderdetails o WHERE o.transactionId = :transactionId"),
    @NamedQuery(name = "Orderdetails.findByQuantity", query = "SELECT o FROM Orderdetails o WHERE o.quantity = :quantity")})
public class Orderdetails implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "order_detail_id")
    private Integer orderDetailId;
    @Column(name = "transaction_id")
    private Integer transactionId;
    @Column(name = "quantity")
    private Integer quantity;
    @JoinColumn(name = "orders_order_id", referencedColumnName = "order_id")
    @ManyToOne(optional = false)
    private Orders ordersOrderId;
    @JoinColumn(name = "products_product_id", referencedColumnName = "product_id")
    @ManyToOne(optional = false)
    private Products productsProductId;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "orderdetaillId")
    private Set<Sales> salesSet;

    public Orderdetails() {
    }

    public Orderdetails(Integer orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public Integer getOrderDetailId() {
        return orderDetailId;
    }

    public void setOrderDetailId(Integer orderDetailId) {
        this.orderDetailId = orderDetailId;
    }

    public Integer getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Integer transactionId) {
        this.transactionId = transactionId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Orders getOrdersOrderId() {
        return ordersOrderId;
    }

    public void setOrdersOrderId(Orders ordersOrderId) {
        this.ordersOrderId = ordersOrderId;
    }

    public Products getProductsProductId() {
        return productsProductId;
    }

    public void setProductsProductId(Products productsProductId) {
        this.productsProductId = productsProductId;
    }

    @XmlTransient
    public Set<Sales> getSalesSet() {
        return salesSet;
    }

    public void setSalesSet(Set<Sales> salesSet) {
        this.salesSet = salesSet;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (orderDetailId != null ? orderDetailId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Orderdetails)) {
            return false;
        }
        Orderdetails other = (Orderdetails) object;
        if ((this.orderDetailId == null && other.orderDetailId != null) || (this.orderDetailId != null && !this.orderDetailId.equals(other.orderDetailId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.ou.pojo.Orderdetails[ orderDetailId=" + orderDetailId + " ]";
    }
    
}
