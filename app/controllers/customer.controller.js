const Customer = require("../models/customer.model.js");



// Retrieve Active Google  from the database.
exports.get_active_google_van = (req, res) => {
  Customer.get_active_google_van((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving get active account."
      });
    else res.send(data);
  });
};
// Retrieve Active Google  from the database.
exports.get_active_google_pure = (req, res) => {
  Customer.get_active_pure((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving get active account."
      });
    else res.send(data);
  });
};

// Retrieve Active Google  from the database.
exports.get_active_google = (req, res) => {
  Customer.get_active_google((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving get active account."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database. * pure *
exports.get_random_pure = (req, res) => {
  Customer.get_random_pure((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "PURE =:= Some error occurred while retrieving get random."
      });
    else res.send(data);
  });
};


// Retrieve all Customers from the database. * VAN *
exports.get_random_van = (req, res) => {
  Customer.get_random_van((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "VANISH =:= Some error occurred while retrieving get random."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database. * N0RD *
exports.get_random = (req, res) => {
  Customer.get_random((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving get random."
      });
    else res.send(data);
  });
};



// Retrieve all Customers from the database. * VANISH *
exports.config_left_pure = (req, res) => {
  Customer.config_left_pure((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "PURE =:= Some error occurred while retrieving get random."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database. * VANISH *
exports.config_left_van = (req, res) => {
  Customer.config_left_van((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "VANISH =:= Some error occurred while retrieving get random."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database. * N0RD *
exports.config_left = (req, res) => {
  Customer.config_left((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving get random."
      });
    else res.send(data);
  });
};

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const customer = new Customer({
    cnf_names: req.body.cnf_names,
    used: req.body.used,
    //active: req.body.active
  });

  // Save Customer in the database
  Customer.create(customer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Customer.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};


exports.findOne_pure = (req, res) => {
  Customer.findById_pure(req.params.customerId11, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `PURE : Not found Customer with id ${req.params.customerId11}.`
        });
      } else {
        res.status(500).send({
          message: "PURE : Error retrieving Customer with id " + req.params.customerId11
        });
      }
    } else res.send(data);
  });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////:
exports.findOne_van = (req, res) => {
  Customer.findById_van(req.params.customerId3, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `VANISH : Not found Customer with id ${req.params.customerId3}.`
        });
      } else {
        res.status(500).send({
          message: "VANISH : Error retrieving Customer with id " + req.params.customerId3
        });
      }
    } else res.send(data);
  });
};

/////////////////////////////////////////////////////////////////////////////////////////////////:

exports.findOne_nord = (req, res) => {
  Customer.findById_nord(req.params.customerId2, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.customerId
        });
      }
    } else res.send(data);
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////:
exports.active_gc_acc_van = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "gc_acc : Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById8(
    req.params.customerId8,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `active_gc_acc : Not found Customer with id ${req.params.customerId8}.`
          });
        } else {
          res.status(500).send({
            message: "active_gc_acc : Error updating Customer with id " + req.params.customerId8
          });
        }
      } else res.send(data);
    }
  );
};


/////////////////////////////////////////////////////////////////////////////////////////////////:
/////////////////////////////////////////////////////////////////////////////////////////////////:
exports.active_gc_acc = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "gc_acc : Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById5(
    req.params.customerId5,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `active_gc_acc : Not found Customer with id ${req.params.customerId5}.`
          });
        } else {
          res.status(500).send({
            message: "active_gc_acc : Error updating Customer with id " + req.params.customerId5
          });
        }
      } else res.send(data);
    }
  );
};


/////////////////////////////////////////////////////////////////////////////////////////////////:

/////////////////////////////////////////////////////////////////////////////////////////////////:
exports.update_gc_acc = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "gc_acc : Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById4(
    req.params.customerId4,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `update_gc_acc : Not found Customer with id ${req.params.customerId4}.`
          });
        } else {
          res.status(500).send({
            message: "update_gc_acc : Error updating Customer with id " + req.params.customerId4
          });
        }
      } else res.send(data);
    }
  );
};


/////////////////////////////////////////////////////////////////////////////////////////////////:
/////////////////////////////////////////////////////////////////////////////////////////////////:
exports.update_gc_acc_van = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "gc_acc_van : Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById6(
    req.params.customerId6,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `update_gc_acc_van : Not found Customer with id ${req.params.customerId6}.`
          });
        } else {
          res.status(500).send({
            message: "update_gc_acc_van : Error updating Customer with id " + req.params.customerId6
          });
        }
      } else res.send(data);
    }
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////:

exports.update_pure = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "PURE : Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById10(
    req.params.customerId10,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `pure : Not found Customer with id ${req.params.customerId10}.`
          });
        } else {
          res.status(500).send({
            message: "pure : Error updating Customer with id " + req.params.customerId10
          });
        }
      } else res.send(data);
    }
  );
};


/////////////////////////////////////////////////////////////////////////////////////////////////:

/////////////////////////////////////////////////////////////////////////////////////////////////:

exports.update_van = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "VANISH : Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById3(
    req.params.customerId3,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `VANISH : Not found Customer with id ${req.params.customerId3}.`
          });
        } else {
          res.status(500).send({
            message: "VANISH : Error updating Customer with id " + req.params.customerId3
          });
        }
      } else res.send(data);
    }
  );
};


/////////////////////////////////////////////////////////////////////////////////////////////////:



exports.update_nord = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById2(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};





// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Customer.updateById(
    req.params.customerId,
    new Customer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  Customer.remove(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.customerId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.customerId
        });
      }
    } else res.send({ message: `Customer was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Customer.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Customers were deleted successfully!` });
  });
};



//reset_all_pure
exports.reset_all_pure = (req, res) => {
  Customer.reset_all_pure((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `[ VANISH ] : All  were reset successfully!` });
  });
};

//reset_all_van
exports.reset_all_van = (req, res) => {
  Customer.reset_all_van((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `[ VANISH ] : All  were reset successfully!` });
  });
};

//reset_all_nord
exports.reset_all_nord = (req, res) => {
  Customer.reset_all_nord((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All [ N0RD ] were reset successfully!` });
  });
};