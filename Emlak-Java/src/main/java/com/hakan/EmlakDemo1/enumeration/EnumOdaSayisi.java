package com.hakan.EmlakDemo1.enumeration;

import java.io.Serializable;

public enum EnumOdaSayisi  {

    IKI_ARTI_BIR(0, "2+1"), UC_ARTI_BIR(1, "3+1"),
    DORT_ARTI_BIR(2, "4+1"), BES_ARTI_IKI(3, "5+2"),
    ON_VE_UZERI(4, "10++");

    private Integer id;
    private String desc;

    EnumOdaSayisi(Integer id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    public static EnumOdaSayisi getById(String desc) {
        for (EnumOdaSayisi e : values()) {
            if (e.getDesc().equals(desc)) return e;
        }
        return null;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }


}
