package com.ou.service.impl;


import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.repository.storeRepon;
import com.ou.service.storeService;
import com.ou.service.userService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class storeServiceImpl implements storeService {

    @Autowired
    private storeRepon storeRepon;

    @Autowired
    private userService userService;

    @Override
    @Transactional
    public Store addStore(Store store, Users userId) {
        // Đảm bảo userId không null và trạng thái của nó chưa được thay đổi
        if (userId != null && !userId.getActive()) {
            userId.setActive(true);
            userService.addUser(userId);
            store.setUserId(userId);
            store.setActive(false);
            return storeRepon.addStore(store);
        } else {
            // Xử lý khi userId không hợp lệ
            return null;
        }
    }

    @Override
    public Store getStoreByUserID(Users id) {
        return storeRepon.getStoreByUserID(id);
    }

    @Override
    public List<Store> getStore(Map<String, String> params) {
        return storeRepon.getStore(params);
    }

    @Override
    @Transactional
    public boolean deleteProductByUserId(Users id) {
        return storeRepon.deleteStoreByUserId(id);
    }

    @Override
    @Transactional
    public boolean updateStore(Store store) {
        try {
            store.setActive(true);
            return storeRepon.updateStore(store);
        } catch (Exception e) {
            // Xử lý khi có lỗi xảy ra
            return false;
        }
    }

    @Override
    public List<Object[]> statsAdmin(Map<String, String> params, Store s) {
        return storeRepon.statsAdmin(params, s);
    }

    @Override
    public Store addStoreRequest(Store store, Users userId) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Store getStoreByID(int id) {
        return storeRepon.getStoreByID(id);
    }
}
