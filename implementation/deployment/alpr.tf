data "docker_registry_image" "alpr" {
  name = "waqasali/fyp-alpr"
}

# resource "docker_image" "alpr" {
#   name          = data.docker_registry_image.alpr.name
#   pull_triggers = [data.docker_registry_image.alpr.sha256_digest]
# }

# resource "docker_container" "alpr" {
#   image = docker_image.alpr.latest
#   name  = "alpr-service"

#   ports {
#     internal = 50051
#     external = var.alpr1_port
#   }
# }

resource "null_resource" "alpr-machine2" {
  triggers = {
    digest = data.docker_registry_image.alpr.sha256_digest
  }

  connection {
    user        = "waqas"
    type        = "ssh"
    private_key = file("~/.ssh/id_rsa")
    timeout     = "2m"
    host        = "202.45.128.185"
  }

  provisioner "remote-exec" {
    inline = [
      "docker rm -f alpr-service1 2> /dev/null",
      "docker rm -f alpr-service2 2> /dev/null",
      "docker rm -f alpr-service3 2> /dev/null",
      "docker rm -f alpr-service4 2> /dev/null",
      "docker pull waqasali/fyp-alpr",
      "docker run --name alpr-service1 --cpuset-cpus=15	--pid=host -p ${var.alpr1_port}:50051 -d waqasali/fyp-alpr",
      "docker run --name alpr-service2 --cpuset-cpus=16	--pid=host -p ${var.alpr2_port}:50051 -d waqasali/fyp-alpr",
      "docker run --name alpr-service3 --cpuset-cpus=17	--pid=host -p ${var.alpr3_port}:50051 -d waqasali/fyp-alpr",
      "docker run --name alpr-service4 --cpuset-cpus=18	--pid=host -p ${var.alpr4_port}:50051 -d waqasali/fyp-alpr"
    ]
  }

  lifecycle {
    create_before_destroy = true
  }
}
