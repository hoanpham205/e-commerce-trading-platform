/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.pojo;

import java.io.Serializable;
import java.math.BigDecimal;
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
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author ADMIN
 */
@Entity
@Table(name = "products")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Products.findAll", query = "SELECT p FROM Products p"),
    @NamedQuery(name = "Products.findByProductId", query = "SELECT p FROM Products p WHERE p.productId = :productId"),
    @NamedQuery(name = "Products.findByProductName", query = "SELECT p FROM Products p WHERE p.productName = :productName"),
    @NamedQuery(name = "Products.findByPrice", query = "SELECT p FROM Products p WHERE p.price = :price")})
public class Products implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "product_id")
    private Integer productId;
    @Size(max = 255)
    @Column(name = "product_name")
    private String productName;
    @Column(name = "price")
    private BigDecimal price;
    @OneToMany(mappedBy = "productId")
    private Set<Comments> commentsSet;
    @OneToMany(mappedBy = "productId")
    private Set<Productimages> productimagesSet;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "productsProductId")
    private Set<Orderdetails> orderdetailsSet;
    @OneToMany(mappedBy = "productId")
    private Set<Orders> ordersSet;
    @OneToMany(mappedBy = "productId")
    private Set<Sales> salesSet;
    @JoinColumn(name = "categories_category_id", referencedColumnName = "category_id")
    @ManyToOne(optional = false)
    private Categories categoriesCategoryId;
    @JoinColumn(name = "store_store_id", referencedColumnName = "store_id")
    @ManyToOne(optional = false)
    private Store storeStoreId;

    public Products() {
    }

    public Products(Integer productId) {
        this.productId = productId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @XmlTransient
    public Set<Comments> getCommentsSet() {
        return commentsSet;
    }

    public void setCommentsSet(Set<Comments> commentsSet) {
        this.commentsSet = commentsSet;
    }

    @XmlTransient
    public Set<Productimages> getProductimagesSet() {
        return productimagesSet;
    }

    public void setProductimagesSet(Set<Productimages> productimagesSet) {
        this.productimagesSet = productimagesSet;
    }

    @XmlTransient
    public Set<Orderdetails> getOrderdetailsSet() {
        return orderdetailsSet;
    }

    public void setOrderdetailsSet(Set<Orderdetails> orderdetailsSet) {
        this.orderdetailsSet = orderdetailsSet;
    }

    @XmlTransient
    public Set<Orders> getOrdersSet() {
        return ordersSet;
    }

    public void setOrdersSet(Set<Orders> ordersSet) {
        this.ordersSet = ordersSet;
    }

    @XmlTransient
    public Set<Sales> getSalesSet() {
        return salesSet;
    }

    public void setSalesSet(Set<Sales> salesSet) {
        this.salesSet = salesSet;
    }

    public Categories getCategoriesCategoryId() {
        return categoriesCategoryId;
    }

    public void setCategoriesCategoryId(Categories categoriesCategoryId) {
        this.categoriesCategoryId = categoriesCategoryId;
    }

    public Store getStoreStoreId() {
        return storeStoreId;
    }

    public void setStoreStoreId(Store storeStoreId) {
        this.storeStoreId = storeStoreId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (productId != null ? productId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Products)) {
            return false;
        }
        Products other = (Products) object;
        if ((this.productId == null && other.productId != null) || (this.productId != null && !this.productId.equals(other.productId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.ou.pojo.Products[ productId=" + productId + " ]";
    }
    
}
