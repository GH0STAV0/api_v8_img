const sql = require("./db.js");

// constructor
const Customer = function(customer) {
  this.cnf_names = customer.cnf_names;
  this.used = customer.used;
  //this.active = customer.active;
};

Customer.get_active_google_pure = result => {
  sql.query("SELECT * FROM gc_acc WHERE (`acc_status`='A' AND `gc_account_type`='pure') ORDER BY RAND() LIMIT 1 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("get_active_google pure: ", res);
    result(null, res);
  });
};


Customer.get_active_google_van = result => {
  sql.query("SELECT * FROM gc_acc WHERE (`acc_status`='A' AND `gc_account_type`='van') ORDER BY RAND() LIMIT 1 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("get_active_google van: ", res);
    result(null, res);
  });
};


Customer.get_active_google = result => {
  sql.query("SELECT * FROM gc_acc WHERE (`acc_status`='A' AND `gc_account_type`='nord') ORDER BY RAND() LIMIT 1 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("get_active_google nord : ", res);
    result(null, res);
  });
};




Customer.reset_all_pure = result => {
  sql.query("UPDATE `pure_tbl` SET  `used` = 'n'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`pure_tbl ${res.affectedRows} customers`);
    result(null, res);
  });
};


Customer.reset_all_nord = result => {
  sql.query("UPDATE `nord_list2` SET  `used` = 'n'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`reset_all_nord ${res.affectedRows} customers`);
    result(null, res);
  });
};

// RESET ALL CONFIG * VANISH *

Customer.reset_all_van = result => {
  sql.query("UPDATE `vanish_tb` SET  `used` = 'n'", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`reset_all_nord ${res.affectedRows} customers`);
    result(null, res);
  });
};



Customer.get_random_pure = result => {
  sql.query("SELECT * FROM pure_tbl WHERE (`used`='n') ORDER BY RAND() LIMIT 1 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("get_random PURE :  ", res);
    result(null, res);
  });
};


// GET RANDOM CONFIG * VANISH * pure_tbl

Customer.get_random_van = result => {
  sql.query("SELECT * FROM vanish_tb WHERE (`used`='n') ORDER BY RAND() LIMIT 1 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("get_random VANISH :  ", res);
    result(null, res);
  });
};


// GET RANDOM CONFIG * N0RD *

Customer.get_random = result => {
  sql.query("SELECT * FROM nord_list2 WHERE (`used`='n') ORDER BY RAND() LIMIT 1 ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("get_random: ", res);
    result(null, res);
  });
};


///SELECT COUNT(*) FROM product_details * pure_tbl *;

Customer.config_left_pure = result => {
  sql.query("SELECT COUNT(*) FROM pure_tbl WHERE (`used`='n') ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("* PURE  * -config_left : ", res);
    result(null, res);
  });
};


///SELECT COUNT(*) FROM product_details * VANISH *;

Customer.config_left_van = result => {
  sql.query("SELECT COUNT(*) FROM vanish_tb WHERE (`used`='n') ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("* VANISH * -config_left : ", res);
    result(null, res);
  });
};



///SELECT COUNT(*) FROM product_details * N0RD *;

Customer.config_left = result => {
  sql.query("SELECT COUNT(*) FROM nord_list2 WHERE (`used`='n') ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("config_left: ", res);
    result(null, res);
  });
};



Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};


Customer.findById_pure = (customerId, result) => {
  sql.query(`SELECT * FROM pure_tbl WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer pure_tbl : ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customer.findById_van = (customerId, result) => {
  sql.query(`SELECT * FROM vanish_tb WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer vanish_tb : ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};


Customer.findById_nord = (customerId, result) => {
  sql.query(`SELECT * FROM nord_list2 WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Customer.getAll = result => {
  sql.query("SELECT * FROM gc_acc", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};



/////////////////////////////////////////////////////////////////

Customer.updateById8 = (id, customer, result) => {
  sql.query(
    "UPDATE gc_acc SET acc_status = ? WHERE account_id = ?",
    ["A", id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "gc_acc_van not_found" }, null);
        return;
      }

      console.log("updated gc_acc_van acc_status: ", { id: id });
      result(null, { id: id });
    }
  );
};


//////** "UPDATE `nord_list2` SET  `used` = 'n'"
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

Customer.updateById5 = (id, customer, result) => {
  sql.query(
    "UPDATE gc_acc SET acc_status = ? WHERE account_id = ?",
    ["A", id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "gc_acc not_found" }, null);
        return;
      }

      console.log("updated gc_acc acc_status: ", { id: id });
      result(null, { id: id });
    }
  );
};


//////** "UPDATE `nord_list2` SET  `used` = 'n'"
/////////////////////////////////////////////////////////////////

Customer.updateById6 = (id, customer, result) => {
  sql.query(
    "UPDATE gc_acc SET acc_status = ? WHERE `gc_account_type` = 'van'",
    ["NA", id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "gc_acc not_found" }, null);
        return;
      }

      console.log("updated gc_acc_van acc_status: ", { id: id });
      result(null, { id: id });
    }
  );
};


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

Customer.updateById4 = (id, customer, result) => {
  sql.query(
    "UPDATE gc_acc SET acc_status = ? WHERE `gc_account_type` = 'nord'",
    ["NA", id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "gc_acc not_found" }, null);
        return;
      }

      console.log("updated gc_acc acc_status: ", { id: id });
      result(null, { id: id });
    }
  );
};


/////////////////////////////////////////////////////////////////

Customer.updateById10 = (id, customer, result) => {
  sql.query(
    "UPDATE pure_tbl SET used = ? WHERE id = ?",
    ["y", id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated pure_tbl: ", { id: id });
      result(null, { id: id });
    }
  );
};

/////////////////////////////////////////////////////////////////

Customer.updateById3 = (id, customer, result) => {
  sql.query(
    "UPDATE vanish_tb SET used = ? WHERE id = ?",
    ["y", id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated vanish_tb: ", { id: id });
      result(null, { id: id });
    }
  );
};
/////////////////////////////////////////////////////////////////

Customer.updateById2 = (id, customer, result) => {
  sql.query(
    "UPDATE nord_list2 SET used = ? WHERE id = ?",
    ["y", id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated nord_list2: ", { id: id });
      result(null, { id: id });
    }
  );
};

/////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////////
Customer.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE customers SET used = ? WHERE id = ?",
    [customer.used, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};
/////////////////////////////////////////////////////////////////
Customer.remove = (id, result) => {
  sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", id);
    result(null, res);
  });
};
/////////////////////////////////////////////////////////////////
Customer.removeAll = result => {
  sql.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};
/////////////////////////////////////////////////////////////////
module.exports = Customer;
