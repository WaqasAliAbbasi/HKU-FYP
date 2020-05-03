data "docker_registry_image" "yolo" {
  name = "waqasali/fyp-yolo"
}

resource "null_resource" "yolo-machine1" {
  triggers = {
    digest = data.docker_registry_image.yolo.sha256_digest
  }

  connection {
    user        = "waqas"
    type        = "ssh"
    private_key = file("~/.ssh/id_rsa")
    timeout     = "2m"
    host        = "202.45.128.184"
  }

  provisioner "remote-exec" {
    inline = [
      "docker rm -f yolo-service-1 2> /dev/null",
      "docker rm -f yolo-service-2 2> /dev/null",
      "docker rm -f yolo-service-3 2> /dev/null",
      "docker rm -f yolo-service-4 2> /dev/null",
      "docker rm -f yolo-service-5 2> /dev/null",
      "docker pull waqasali/fyp-yolo",
      "docker run --name yolo-service-1 --cpuset-cpus=0	--pid=host -p ${var.yolo1_port}:50051 --gpus device=0 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-2 --cpuset-cpus=1 --pid=host -p ${var.yolo2_port}:50051 --gpus device=1 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-3 --cpuset-cpus=2 --pid=host -p ${var.yolo3_port}:50051 --gpus device=2 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-4 --cpuset-cpus=3 --pid=host -p ${var.yolo4_port}:50051 --gpus device=3 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-5 --cpuset-cpus=4 --pid=host -p ${var.yolo5_port}:50051 --gpus all -d waqasali/fyp-yolo",
    ]
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "null_resource" "yolo-machine2" {
  triggers = {
    digest = data.docker_registry_image.yolo.sha256_digest
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
      "docker rm -f yolo-service-6 2> /dev/null",
      "docker rm -f yolo-service-7 2> /dev/null",
      "docker rm -f yolo-service-8 2> /dev/null",
      "docker rm -f yolo-service-9 2> /dev/null",
      "docker rm -f yolo-service-10 2> /dev/null",
      "docker pull waqasali/fyp-yolo",
      "docker run --name yolo-service-6 --cpuset-cpus=0	--pid=host -p ${var.yolo6_port}:50051 --gpus device=0 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-7 --cpuset-cpus=1 --pid=host -p ${var.yolo7_port}:50051 --gpus device=1 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-8 --cpuset-cpus=2 --pid=host -p ${var.yolo8_port}:50051 --gpus device=2 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-9 --cpuset-cpus=3 --pid=host -p ${var.yolo9_port}:50051 --gpus device=3 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-10 --cpuset-cpus=4 --pid=host -p ${var.yolo10_port}:50051 --gpus all -d waqasali/fyp-yolo",
    ]
  }

  lifecycle {
    create_before_destroy = true
  }
}
