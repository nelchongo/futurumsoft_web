locals {
  external_lb_name = "${module.application.app_name}-external"
}

resource "aws_lb_target_group" "external_http" {
  name        = "${local.external_lb_name}-http"
  port        = 80
  protocol    = "TCP"
  target_type = "alb"
  vpc_id      = module.application.vpc_id
  health_check {
    protocol            = "HTTP"
    path                = "/"
    interval            = 10
    healthy_threshold   = 3
    unhealthy_threshold = 3
  }

  tags = local.tags

}

resource "aws_lb_target_group" "external_https" {
  name        = "${local.external_lb_name}-https"
  port        = 443
  protocol    = "TCP"
  target_type = "alb"
  vpc_id      = module.application.vpc_id
  health_check {
    protocol            = "HTTPS"
    path                = "/LBhealthcheck"
    interval            = 10
    healthy_threshold   = 3
    unhealthy_threshold = 3
  }

  tags = local.tags
}

resource "aws_lb_target_group_attachment" "internal_alb_external_http_listener" {
  target_group_arn = aws_lb_target_group.external_http.arn
  target_id        = module.application.internal_lb_arn
}

resource "aws_lb_target_group_attachment" "internal_alb_external_https_listener" {
  target_group_arn = aws_lb_target_group.external_https.arn
  target_id        = module.application.internal_lb_arn
}

resource "aws_lb" "external_lb" {
  name               = "${local.external_lb_name}"
  internal           = false
  load_balancer_type = "network"
  subnets            = module.application.vpc_public_subnet

  tags = local.tags

}

resource "aws_lb_listener" "external_80tcp_listener" {
  load_balancer_arn = aws_lb.external_lb.arn
  port              = 80
  protocol          = "TCP"
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.external_http.arn
  }

  tags = local.tags
}

resource "aws_lb_listener" "external_443tcp_listener" {
  load_balancer_arn = aws_lb.external_lb.arn
  port              = 443
  protocol          = "TCP"

  default_action {
    type = "forward"
    target_group_arn = aws_lb_target_group.external_https.arn
  }

  tags = local.tags
}

