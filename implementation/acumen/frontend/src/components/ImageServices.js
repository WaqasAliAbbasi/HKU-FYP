import React, { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "..";

export const ImageServices = () => {
  const [services, setServices] = useState([]);
  const [updated, setUpdated] = useState("All the above are being used");
  useEffect(() => {
    axios
      .get(`${API_URL}/yolo_services`)
      .then(response => response.data)
      .then(services =>
        setServices(
          services
            .map(service => ({ ...service, checked: true }))
            .sort((a, b) => a.port - b.port)
        )
      );
  }, []);

  const resetServices = () => {
    axios
      .get(`${API_URL}/yolo_services/reset`)
      .then(response => response.data)
      .then(services => {
        setServices(
          services
            .map(service => ({ ...service, checked: true }))
            .sort((a, b) => a.port - b.port)
        );
        setUpdated("Updated services to use all above");
      });
  };

  const updateServices = () => {
    axios
      .post(
        `${API_URL}/yolo_services`,
        services.filter(({ checked }) => checked)
      )
      .then(response => response.data)
      .then(services =>
        setUpdated(
          `Updated services to use ${services
            .map(({ port }) => port)
            .join(" ")}`
        )
      );
  };
  return (
    <div>
      <h2>Set YOLO Services in Use</h2>
      {services.map(({ name, port, checked }, index) => (
        <p key={index}>
          <label>
            {name} (Port {port})
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={({ target }) => {
                const currentServices = services.filter(
                  service => service.name !== name
                );
                currentServices.push({ name, port, checked: target.checked });
                setServices(currentServices.sort((a, b) => a.port - b.port));
              }}
            />
          </label>
        </p>
      ))}
      <input
        type="submit"
        value="Reset Services to Default"
        onClick={resetServices}
      />
      <input
        type="submit"
        value="Update Services In Use"
        onClick={updateServices}
      />
      <p>{updated}</p>
    </div>
  );
};
