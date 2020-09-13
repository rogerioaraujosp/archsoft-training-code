package com.archsoft;

import com.archsoft.database.DatabaseConnection;
import com.archsoft.network.NetworkConnection;

public class ConnectionFactory {

    public Connection connect() {
//        return new DatabaseConnection();
        return new NetworkConnection();
    }
}
