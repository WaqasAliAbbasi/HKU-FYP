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
      "docker pull waqasali/fyp-yolo",
      "docker run --name yolo-service-1 --pid=host -p ${var.yolo1_port}:50051 --gpus device=0 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-2 --pid=host -p ${var.yolo2_port}:50051 --gpus device=1 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-3 --pid=host -p ${var.yolo3_port}:50051 --gpus all -d waqasali/fyp-yolo",
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
      "docker rm -f yolo-service-4 2> /dev/null",
      "docker rm -f yolo-service-5 2> /dev/null",
      "docker pull waqasali/fyp-yolo",
      "docker run --name yolo-service-4 --pid=host -p ${var.yolo4_port}:50051 --gpus device=0 -d waqasali/fyp-yolo",
      "docker run --name yolo-service-5 --pid=host -p ${var.yolo5_port}:50051 --gpus all -d waqasali/fyp-yolo",
    ]
  }

  lifecycle {
    create_before_destroy = true
  }
}
